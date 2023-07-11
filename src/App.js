import { useEffect, useState } from "react";
import { getAllProducts, insertProduct, deleteProduct } from "./Api.js";
import { Container, Content, Header, ListContent, Span, Form, Input, Div, SpanProduct } from "./styles.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = {
	listContainer: {
	  width: '100%',
	  maxWidth: 600,
	  bgcolor: 'rgba(243, 229, 245, 0.8)',
	  overflow: 'auto',
	  maxHeight: 450,
	  '&::-webkit-scrollbar': {
		width: '4px',
		backgroundColor: 'transparent', // Define a cor de fundo da barra de rolagem como transparente
	  },
	  '&::-webkit-scrollbar-thumb': {
		backgroundColor: '#dc1ac0', // Define a cor da barra de rolagem
		borderRadius: '4px',
	  },
	},
  };

function App() {
	const [products, setProducts] = useState([]);
	const [newProduct, setNewProduct] = useState({
		name: "",
		brand: "",
		type: "",
		price: "",
	});
  // Buscar os produtos ao carregar o componente
	useEffect(() => {
		fetchProducts();
	}, []);

	 // Função assíncrona para buscar os produtos da API
	const fetchProducts = async () => {
		const data = await getAllProducts();
		setProducts(data);
	};

	// Função para lidar com a mudança de valores nos inputs do formulário de adição de produto
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
	};

	  // Função assíncrona para lidar com a adição de um novo produto
	const handleAddProduct = async (event) => {
		event.preventDefault();
		await insertProduct(newProduct);
		setNewProduct({ name: "", brand: "", type: "", price: "" });
		fetchProducts();
	};

	 // Função assíncrona para lidar com a exclusão de um produto
	const handleDeleteProduct = async (productId) => {
		await deleteProduct(productId);
		fetchProducts();
	};

	return (
		<Container>
			<Content>
				<Header>Batons disponíveis</Header>
				  <List sx={styles.listContainer}>
					{products.map((product) => (
						<>
						<ListItem width= '100%' alignItems="flex-start" key={product.id}>
							<ListContent>
							<Div><Span>Nome</Span> <SpanProduct>{product.name}</SpanProduct></Div>
							<Div><Span>Marca</Span><SpanProduct> {product.brand}</SpanProduct></Div>
							<Div><Span>Tipo </Span> <SpanProduct>{product.type}</SpanProduct></Div>
							<Div><Span>Preço</Span><SpanProduct> R${product.price}</SpanProduct></Div>		
							<Button  startIcon={<DeleteIcon />} color="secondary" onClick={() => handleDeleteProduct(product.id)}/>							
							</ListContent>
							</ListItem> 
							 <Divider variant='middle' component="li" />
							 </>
					))}
				</List>
				<Header>Adicionar batom </Header>
				<Form>
					<Input
						type="text"
						name="name"
						placeholder="Nome do batom"
						value={newProduct.name}
						onChange={handleInputChange}
					/>
					<Input
						type="text"
						name="brand"
						placeholder="Marca do batom"
						value={newProduct.brand}
						onChange={handleInputChange}
					/>
					<Input
						type="text"
						name="type"
						placeholder="Batom ou gloss?"
						value={newProduct.type}
						onChange={handleInputChange}
					/>
					<Input
						type="text"
						name="price"
						placeholder="Qual o preço?"
						value={newProduct.price}
						onChange={handleInputChange}
					/>
					<Fab onClick={handleAddProduct} size="small" color="secondary" aria-label="add">
						<AddIcon />
					</Fab>
				</Form>
			</Content>
		</Container>
	);
}

export default App;
