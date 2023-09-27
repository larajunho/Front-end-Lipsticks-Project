import { useEffect, useState } from "react";
import {
	getAllProducts,
	insertProduct,
	editProduct,
	deleteProduct,
	getAddress,
} from "./Api.js";
import {
	Container,
	Content,
	Header,
	ListContent,
	Span,
	Form,
	Input,
	Div,
	SpanProduct,
	TotalBill,
	EditInput,
	CepField,
} from "./styles.js";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckIcon from "@mui/icons-material/Check";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import SearchIcon from '@mui/icons-material/Search';
import {  toast  } from 'react-toastify';
import { Modal } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AdfScannerIcon from '@mui/icons-material/AdfScanner';

const styles = {
	listContainer: {
		width: "100%",
		maxWidth: 1200,
		bgcolor: "rgba(243, 229, 245, 0.8)",
		overflow: "auto",
		maxHeight: 450,
		"&::-webkit-scrollbar": {
			width: "4px",
			backgroundColor: "transparent", // Define a cor de fundo da barra de rolagem como transparente
		},
		"&::-webkit-scrollbar-thumb": {
			backgroundColor: "#dc1ac0", // Define a cor da barra de rolagem
			borderRadius: "4px",
		},
	},
};

const NewStockItemForm = ({ onAdd }) => {
	const [product, setProduct] = useState({
		name: "",
		brand: "",
		type: "",
		price: "",
		amount: "",
	});

	// Função para lidar com a mudança de valores nos inputs do formulário de adição de produto
	const changeProduct = ({ field, value }) => {
		setProduct((product) => ({ ...product, [field]: value }));
	};

	const handleAdd = () => {
		onAdd(product);
		setProduct({ name: "", brand: "", type: "", price: "", amount: "" });
	};

	return (
		<Form>
			<Input
				type="text"
				name="name"
				placeholder="Nome do batom"
				value={product.name}
				onChange={({ target: { value } }) =>
					changeProduct({ field: "name", value })
				}
			/>
			<Input
				type="text"
				name="brand"
				placeholder="Marca do batom"
				value={product.brand}
				onChange={({ target: { value } }) =>
					changeProduct({ field: "brand", value })
				}
			/>
			<Input
				type="text"
				name="type"
				placeholder="Batom ou gloss?"
				value={product.type}
				onChange={({ target: { value } }) =>
					changeProduct({ field: "type", value })
				}
			/>
			<Input
				type="text"
				name="price"
				placeholder="Qual o preço?"
				value={product.price}
				onChange={({ target: { value } }) =>
					changeProduct({ field: "price", value })
				}
			/>
			<Input
				type="text"
				name="amount"
				placeholder="Qual a quantidade?"
				value={product.amount}
				onChange={({ target: { value } }) =>
					changeProduct({ field: "amount", value })
				}
			/>
			<Fab
				onClick={handleAdd}
				size="small"
				color="secondary"
				aria-label="add"
			>
				<AddIcon />
			</Fab>
		</Form>
	);
};

const StockItem = ({
	product: _product,
	onDelete,
	onAddToCart,
	onEdit,
	amountInUse,
}) => {
	const [product, setProduct] = useState(_product);

	const [isEditing, setIsEditing] = useState(false);

	const toggleEdit = () => {
		setIsEditing((isEditing) => !isEditing);
	};

	const handleConfirmEdit = () => {
		//validar
		onEdit(product);
		toggleEdit();
	};

	const handleCancelEdit = () => {
		setProduct(_product);
		toggleEdit();
	};

	const handleEditField = ({ field, value }) => {
		setProduct((product) => ({ ...product, [field]: value }));
	};

	const handleAddToCart = () => {
		if (product.amount - amountInUse > 0) {
			onAddToCart();
		}
	};

	useEffect(() => {
		setProduct(product);
	}, [_product]);

	return (
		<ListItem width="100%" alignItems="flex-start" key={product.id}>
			{isEditing ? (
				<ListContent>
					<Div>
						<Span>Nome</Span>{" "}
						<EditInput
							value={product.name}
							onChange={({ target: { value } }) =>
								handleEditField({ field: "name", value })
							}
						/>
					</Div>
					<Div>
						<Span>Marca</Span>
						<EditInput
							value={product.brand}
							onChange={({ target: { value } }) =>
								handleEditField({ field: "brand", value })
							}
						/>
					</Div>
					<Div>
						<Span>Tipo </Span>{" "}
						<EditInput
							value={product.type}
							onChange={({ target: { value } }) =>
								handleEditField({ field: "type", value })
							}
						/>
					</Div>
					<Div>
						<Span>Preço</Span>
						<EditInput
							value={product.price}
							onChange={({ target: { value } }) =>
								handleEditField({ field: "price", value })
							}
						/>
					</Div>
					<Div>
						<Span>Quantidade</Span>
						<EditInput
							value={product.amount}
							onChange={({ target: { value } }) =>
								handleEditField({ field: "amount", value })
							}
						/>
					</Div>
					<Button
						startIcon={<CheckIcon />}
						color="secondary"
						onClick={handleConfirmEdit}
					/>
					<Button
						startIcon={<DoNotDisturbAltIcon />}
						color="secondary"
						onClick={handleCancelEdit}
					/>
				</ListContent>
			) : (
				<ListContent>
					<Div>
						<Span>Nome</Span>{" "}
						<SpanProduct>{product.name}</SpanProduct>
					</Div>
					<Div>
						<Span>Marca</Span>
						<SpanProduct> {product.brand}</SpanProduct>
					</Div>
					<Div>
						<Span>Tipo </Span>{" "}
						<SpanProduct>{product.type}</SpanProduct>
					</Div>
					<Div>
						<Span>Preço</Span>
						<SpanProduct> R${product.price}</SpanProduct>
					</Div>
					<Div>
						<Span>Quantidade</Span>
						<SpanProduct>
							{" "}
							{product.amount - amountInUse} unidades
						</SpanProduct>
					</Div>
					<Button
						startIcon={<DeleteIcon />}
						color="secondary"
						onClick={onDelete}
					/>
					<Button
						startIcon={<ModeIcon />}
						color="secondary"
						onClick={toggleEdit}
					/>
					<Button
						startIcon={<AddShoppingCartIcon />}
						color="secondary"
						onClick={handleAddToCart}
					/>
				</ListContent>
			)}
		</ListItem>
	);
};

const CartItem = ({ product, quantity, onDelete }) => {
	return (
		<ListItem width="100%" alignItems="flex-start">
			<ListContent>
				<Div>
					<Span>Nome</Span> <SpanProduct>{product.name}</SpanProduct>
				</Div>
				<Div>
					<Span>Marca</Span>
					<SpanProduct> {product.brand}</SpanProduct>
				</Div>
				<Div>
					<Span>Tipo </Span> <SpanProduct>{product.type}</SpanProduct>
				</Div>
				<Div>
					<Span>Preço</Span>
					<SpanProduct> R${product.price}</SpanProduct>
				</Div>
				<Div>
					<Span>Quantidade</Span>
					<SpanProduct>
						{" "}
						{quantity} {quantity === 1 ? "unidade" : "unidades"}
					</SpanProduct>
				</Div>
				<Button
					startIcon={<DeleteIcon />}
					color="secondary"
					onClick={onDelete}
				/>
			</ListContent>
		</ListItem>
	);
};

const useCart = ({ products }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product) => {
		const existingItem = cart.find(
			(item) => item.product.id === product.id
		);

		if (existingItem) {
			// Se o produto já estiver no carrinho, atualize a quantidade
			const updatedCart = cart.map((item) => {
				if (item.product.id === product.id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			setCart(updatedCart);
		} else {
			// Se o produto não estiver no carrinho, adicione-o com quantidade 1
			setCart([...cart, { product, quantity: 1 }]);
		}
	};

	const removeFromCart = (productId) => {
		const updatedCart = cart.map((item) => {
			if (item.product.id === productId) {
				// Reduza a quantidade do produto no carrinho
				const updatedQuantity = item.quantity - 1;
				return { ...item, quantity: updatedQuantity };
			}
			return item;
		});

		// Remova itens com quantidade zero do carrinho
		const filteredCart = updatedCart.filter((item) => item.quantity > 0);

		setCart(filteredCart);
	};

	return { cart, addToCart, removeFromCart };
};

function App() {
	const [products, setProducts] = useState([]);
	const [cep, setCep] = useState('');
	const [addressData, setAddressData] = useState(null);
	const { cart, addToCart, removeFromCart } = useCart({ products });
	const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

	const handleGetAddress = async () => {
		try {
		  const data = await getAddress(cep);
		  if (data && data.erro) {
			toast.error('CEP não encontrado.');
		  } else {
			setAddressData(data);
			handleOpen();
		  }
		  
		} catch (error) {
		  console.error('Erro:', error);
		  
		}
	  };

	// Função assíncrona para lidar com a adição de um novo produto
	const handleAddProduct = async (product) => {
		await insertProduct(product);
		fetchProducts();
	};

	// Função assíncrona para lidar com a edição de um produto
	const handleEditProduct = async (product) => {
		await editProduct(product);
		fetchProducts();
	};

	// Função assíncrona para lidar com a exclusão de um produto
	const handleDeleteProduct = async (productId) => {
		const cartItem = cart.find(
			({ product }) => product.id === productId
		);
		const isProductAddedToCart = cartItem != null

		if (!isProductAddedToCart) {
			await deleteProduct(productId);
			fetchProducts();
		} else {
			toast.error(`Não é possível deletar o produto '${cartItem.product.name}': Esse produto faz parte do carrinho!`)
		}
	};

	const calculateTotalPrice = () => {
		return cart.reduce((total, item) => {
			return total + item.product.price * item.quantity;
		}, 0);
	};

	const getAmountInUse = (product) => {
		const cartEntry = cart.find(
			(cartItem) => cartItem.product.id === product.id
		);

		return cartEntry?.quantity ?? 0;
	};

	// Função assíncrona para buscar os produtos da API
	async function fetchProducts() {
		const data = await getAllProducts();
		setProducts(data);
	}

	// Buscar os produtos ao carregar o componente
	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<Container>
			<Content>
				<Header>Batons disponíveis em estoque</Header>
				<List sx={styles.listContainer}>
					{products.map((product) => (
						<>
							<StockItem
								key={product.id}
								product={product}
								onDelete={() => handleDeleteProduct(product.id)}
								onAddToCart={() => addToCart(product)}
								onEdit={handleEditProduct}
								amountInUse={getAmountInUse(product)}
							/>
							<Divider variant="middle" component="li" />
						</>
					))}
				</List>

				<Header>Adicionar batom disponível a lista </Header>
				<NewStockItemForm onAdd={handleAddProduct} />

				<Header> Carrinho para o Cliente </Header>
				<List sx={styles.listContainer}>
					{cart.map(({ product, quantity }) => (
						<>
							<CartItem
								key={product.id}
								onDelete={() => removeFromCart(product.id)}
								product={product}
								quantity={quantity}
							/>
							<Divider variant="middle" component="li" />
						</>
					))}

					<TotalBill>Total: R${calculateTotalPrice()}</TotalBill>
					<CepField>
      <Span style={{marginRight: 10}}>Digite o CEP:</Span>
      <EditInput
        type="text"
        id="cepInput"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />
      <Button
					startIcon={<SearchIcon />}
					color="secondary" onClick={handleGetAddress}/>
					 
	  </CepField>

				</List>

				<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #dc1ac0',
            boxShadow: 24,
            p: 4,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Etiqueta para Envio
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Logradouro: {addressData?.logradouro}
          </Typography>
		  <Typography sx={{ mt: 2 }}>
            Número: {addressData?.siafi
}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Bairro: {addressData?.bairro}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Cidade: {addressData?.localidade
}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Estado: {addressData?.uf}
          </Typography>
		  <Typography sx={{ mt: 2 }}>
            CEP: {addressData?.cep}
          </Typography>
          <Button startIcon={< AdfScannerIcon  />} color="secondary" onClick={handleClose}/>
        </Box>
      </Modal>
			</Content>
		</Container>
	);
}

export default App;
