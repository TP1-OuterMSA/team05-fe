import { api } from ".";

export async function postStore(id: number, storeType: string, name: string, description: string, url: string, image: File) {
  try {
    console.log(id);
    console.log(image);
    const formData = new FormData();
    formData.append(
        "storeRequest",
        new Blob(
        [JSON.stringify({ id, storeType, name, description, url })],
        { type: "application/json" }
        )
    );
    formData.append("image", image);

    await api.post(`/stores/admin`, formData);
    console.log("postStore 성공했습니다.");
  } catch (error) {
    throw error;
  }
}

export async function deleteStore(id: number|undefined) {
  console.log(id);
  try {
    if(id==null) return;
    await api.delete(`/stores/admin`, {data: { id }});
    console.log("deleteStore 성공했습니다.");
  } catch (error) {
    throw error;
  }
}

export async function getStore() {
    try {
        const response = await api.get(`/stores/admin`);
        console.log("getStore 성공했습니다.");
        return response.data;
    } catch (error) {
        throw error;
    }
}
