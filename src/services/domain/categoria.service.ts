import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.cong";
import { CategoriaDTO } from "../../app/models/categotia.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoriaService{
    constructor(public http: HttpClient){

    }
    findAll(): Observable<CategoriaDTO[]> {
        return this.http.get<CategoriaDTO[]>(`${API_CONFIG.baseUrl}/categorias`);
    }

}