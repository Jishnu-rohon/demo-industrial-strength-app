class RestClient {
    private baseUrl: string = "http://localhost:8080";

    // constructor(baseUrl: string) {
    //     this.baseUrl = baseUrl;
    // }

    async getAllEmployees(): Promise<any> {
        const response = await fetch(`${this.baseUrl}/api/employees`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    async getEmployeeById(arg0: number) {
        const response = await fetch(`${this.baseUrl}/api/employees/${arg0}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }
}

export default RestClient;