/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { IndeconLastValuesResponseDto } from '../models/indecon-last-values-response-dto';

/**
 * Indecon Controller
 */
@Injectable({
  providedIn: 'root',
})
class IndeconControllerService extends __BaseService {
  static readonly getLastValuesUsingGETPath = '/indecon/';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Service that return all the latest values from the indecon site api
   * @return OK
   */
  getLastValuesUsingGETResponse(): __Observable<__StrictHttpResponse<IndeconLastValuesResponseDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/indecon/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<IndeconLastValuesResponseDto>;
      })
    );
  }
  /**
   * Service that return all the latest values from the indecon site api
   * @return OK
   */
  getLastValuesUsingGET(): __Observable<IndeconLastValuesResponseDto> {
    return this.getLastValuesUsingGETResponse().pipe(
      __map(_r => _r.body as IndeconLastValuesResponseDto)
    );
  }
}

module IndeconControllerService {
}

export { IndeconControllerService }
