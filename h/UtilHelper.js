class UtilHelper {

	static #current = null;
	static getInstance() {
		if(UtilHelper.#current === null){
			UtilHelper.#current = new UtilHelper();
		}
		return UtilHelper.#current;
	}

	getUrlParams() {
		let params = {};

		window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, 
    	function(str, key, value) { 
        	params[key] = value; 
        }
    );     
    
   	return params; 
	}
}

export default UtilHelper.getInstance();