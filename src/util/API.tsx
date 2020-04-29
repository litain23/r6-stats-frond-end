
export default async function API<T>(url: string ,init?: RequestInit): Promise<T>{
    try {
        const response = await fetch(url, init);

        if (!response.ok) {
            throw new Error(response.statusText)
        }


        const wrapped = await response.json() as Promise<T>
        return wrapped;

    } catch (e) {
        throw new Error(e);
    }
}
