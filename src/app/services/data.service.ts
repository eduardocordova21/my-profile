import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IConfiguration, ISocialNetworks } from '../models/models';

@Injectable()
export class DataService {
  private _configurationsPath: string = 'assets/data/configuration.json';
  private _socialNetworksPath: string = 'assets/data/social_network.json';

  constructor(private http: HttpClient) {}

  public getConfigurations(): Observable<IConfiguration> {
    return this.http.get<IConfiguration>(this._configurationsPath);
  }

  public getSocialNetworks(): Observable<ISocialNetworks> {
    return this.http.get<ISocialNetworks>(this._socialNetworksPath);
  }
}
