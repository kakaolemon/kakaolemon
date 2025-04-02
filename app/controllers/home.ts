import { ServerResponse } from "http";
import { sendResponse } from "modules/kakaolemon/core/types";

class Home {
	hello(response: ServerResponse) {
		return sendResponse(
			response,
			"Hello World",
			200
		)
	}
}

export default Home
