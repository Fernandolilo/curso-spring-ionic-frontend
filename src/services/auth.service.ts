import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../app/models/credenciais.dto";
import { API_CONFIG } from "../config/api.cong";

@Injectable()
export class AuthService{    
   
    constructor(public http: HttpClient){

    }
    authenticate(creds: CredenciaisDTO){
       return this.http.post(`
            ${API_CONFIG.baseUrl}/login`,
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
}