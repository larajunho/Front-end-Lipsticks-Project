import axios from "axios";

const API_URL = "http://127.0.0.1:5000";

// Função assíncrona para buscar todos os produtos da API
export const getAllProducts = async () => {
	try {
		const response = await axios.get(`${API_URL}/get_all_products`);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

// Função assíncrona para inserir um novo produto na API
export const insertProduct = async (productData) => {
	try {
		const response = await axios.post(
			`${API_URL}/insert_product`,
			productData
		);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

// Função assíncrona para editar um produto na API
export const editProduct = async (productData) => {
	try {
		const response = await axios.put(
			`${API_URL}/edit_product`,
			productData
		);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

// Função assíncrona para excluir um produto da API
export const deleteProduct = async (productId) => {
	try {
		const response = await axios.delete(
			`${API_URL}/delete_product?id=${productId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

// Função assíncrona para buscar o endereço do CEP fornecido
export const getAddress = async (cep) => {
	try {
		const response = await axios.get(
			`${API_URL}/get_address?cep=${cep}`
		);
		return response.data;
	} catch (error) {
		console.error("Error:", error);
	}
};

