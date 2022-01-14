export interface SingleApiService {
    url: string;
}

export interface ApiServices {
    getDepartments: SingleApiService;
    getArtObjects: SingleApiService;
    search: SingleApiService;
}
