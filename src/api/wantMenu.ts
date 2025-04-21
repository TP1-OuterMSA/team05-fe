import { api } from ".";

export async function getWantMenu(){
    try{
        const response = await api.get('/menus/like');
        return response.data;
    } catch(error){
        error;
    }
}
export async function postWantMenu(menuNames: string[]|undefined, comment: string|undefined) {
    try {
        await api.post(`/menus/like`, {menuNames, comment});
    } catch (error) {
        throw error;
    }
}