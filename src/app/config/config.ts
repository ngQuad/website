import { environment } from '../../environments/environment';

interface IConfig {
  apiEmailEndpoint: string;
  mapGlToken: string;
}

const config: IConfig = {
  apiEmailEndpoint: environment.api,
  mapGlToken: environment.mapGlToken
};

export { config };
