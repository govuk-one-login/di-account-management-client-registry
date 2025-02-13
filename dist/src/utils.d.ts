import { EnvironmentValue } from "../interfaces/client.interface";
declare const getEnvironmentType: (environment: string) => "production" | "integration" | "nonProduction";
declare const getValueForEnvironment: <T>(environment: string, value: EnvironmentValue<T>) => T;
export { getEnvironmentType, getValueForEnvironment };
