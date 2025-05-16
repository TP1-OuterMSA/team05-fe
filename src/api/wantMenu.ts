import { api } from ".";

export async function getWantMenu() {
	try {
		const response = await api.get("/menus/admin/foolList");

		return response.data.result.wantMenus.map((item: { name: string }) => item.name);
	} catch (error) {
		console.error("사용자 메뉴 조회 실패:", error);
		throw error;
	}
}


export async function postWantMenu(menuNames: string[] | undefined, comment: string | undefined) {
	try {
		await api.post("/menus/like", { menuNames, comment });
	} catch (error) {
		console.error("사용자 메뉴 전송 실패:", error);
		throw error;
	}
}
