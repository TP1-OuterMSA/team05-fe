import { api } from ".";

// 관리자 선호 메뉴 조회
export async function getWantMenu(): Promise<string[]> {
	try {
		const response = await api.get("/menus/admin/foolList");
		return response.data.result.wantMenus.map((item: { name: string }) => item.name);
	} catch (error) {
		console.error("메뉴 조회 실패:", error);
		throw error;
	}
}

// 관리자 선호 메뉴 저장
export async function putWantMenu(names: string[]) {
	try {
		await api.put("/menus/admin/foodList", { names });
	} catch (error) {
		console.error("메뉴 저장 실패:", error);
		throw error;
	}
}
