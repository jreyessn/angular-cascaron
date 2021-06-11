import { HttpParams } from "@angular/common/http";
import { PaginateInterface } from "../interfaces/paginate.interface";

export class PaginatorNgx {

    search = '';
    perPage: any = 10;
    page: any = 0;
    totalElements: any = 0;
    sortedBy = 'desc';
    orderBy = 'id';
    params = {};    

    /**
     * Actualiza el número de página
     * 
     * @param event Evento NgxDatatable
     */
    setPage(event){
        this.page = event.offset;
    }

    /**
     * Asigna el orden
     * 
     * @param param0 Evento NgxDatatable
     */
    onSort({ sorts }){
        this.orderBy = sorts[0].prop;
        this.sortedBy = sorts[0].dir;
    }

    /**
     * Asignar valores de busqueda y pagina
     * 
     * @param values Valores de #SearchBarComponent
     */
    setSearchBar(values: { search: string; perPage: number; }){
        this.page = 0;
        this.search = values.search;
        this.perPage = values.perPage;
    }

    /**
     * Actualiza el total de elementos
     * 
     * @param props Metadata recibida por la api de paginacion
     */
    updateProps(props: PaginateInterface){
        this.totalElements = props.total
    }

    getHttpParams(){
        let queryParams = new HttpParams;

        queryParams = queryParams.append("search", this.search);
        queryParams = queryParams.append("perPage", this.perPage);
        queryParams = queryParams.append("page", this.page + 1);
        queryParams = queryParams.append("sortedBy", this.sortedBy);
        queryParams = queryParams.append("orderBy", this.orderBy);

        Object.keys(this.params).forEach(key => {
            queryParams = queryParams.append(key, this.params[key])
        })

        return queryParams.toString();
    }

}