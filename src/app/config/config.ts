import { environment } from '../../environments/environment';

interface IConfig {
  apiEmailEndpoint: string;
}

const config: IConfig = {
  apiEmailEndpoint: environment.api,
};

export { config };
