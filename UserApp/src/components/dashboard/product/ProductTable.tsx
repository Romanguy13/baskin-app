import * as React from 'react';
import {
  Button,
  Sheet,
  Table,
  Typography,
  Modal,
  ModalDialog,
  ModalClose,
  AspectRatio,
} from '@mui/joy';
import { Product } from '../../../graphql/product/schema';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import { useAppContext } from '../../../context';
import { GraphQLClient, gql } from 'graphql-request';
import { useTranslation } from 'next-i18next';
import ProductEdit from '../../../components/dashboard/product/ProductEdit';
import Image from 'next/image';

// Reference: https://codesandbox.io/s/6bmeke?file=/components/OrderTable.tsx:7018-12425
// Reference: https://mui.com/joy-ui/react-menu/

export default function ProductTable({ products }: { products: Product[] }) {
  const { signedInUser } = useAppContext();
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [product, setProduct] = React.useState('');
  const [selectedProduct, setSelectedProduct] = React.useState<Product>();
  const [productList, setProductList] = React.useState<Product[]>([]);
  const open = Boolean(anchorEl);

  const { t } = useTranslation('common');

  React.useEffect(() => {
    setProductList(products);
  }, [products]);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    product: string,
    productObj?: Product,
  ) => {
    setProduct(product);
    if (productObj) setSelectedProduct(productObj);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    setAnchorEl(null);
    const bearerToken = signedInUser?.accessToken;
    const url = window.location.protocol + '//' + window.location.host;
    const graphQLClient = new GraphQLClient(url +'/api/graphql',
      {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      },
    );
    const query = gql`mutation removeProduct {removeProduct (product: "${product}") { id }}`;
    await graphQLClient.request(query);
    setProductList(productList.filter(row => row.id != product));
  };

  return (
    <Sheet
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        width: '100%',
        borderRadius: 'md',
        flex: 1,
        overflow: 'auto',
        minHeight: 0,
        margin: '20px 0',
      }}
    >
      <Table
        aria-labelledby="tableTitle"
        stickyHeader
        hoverRow
        sx={{
          '--TableCell-headBackground': theme => theme.vars.palette.background.level1,
          '--Table-headerUnderlineThickness': '1px',
          '--TableRow-hoverBackground': theme => theme.vars.palette.background.level1,
        }}
      >
        <thead>
          <tr>
            <th style={{ width: 140, padding: 12 }}>
              {t('dashboard.products.table.image')}
            </th>
            <th style={{ width: 220, padding: 12 }}>
              {t('dashboard.products.table.product')}
            </th>
            <th style={{ width: 160, padding: 12 }}>
              {t('dashboard.products.table.category')}
            </th>
            <th style={{ width: 120, padding: 12 }}>
              {t('dashboard.products.table.price')}
            </th>
            <th style={{ width: 100, padding: 12 }}></th>
          </tr>
        </thead>
        <tbody>
          {productList.map((row: Product, index: number) => (
            <tr key={row.id}>
              <td>
                <AspectRatio ratio="1/1" sx={{ width: 100 }}>
                  <Image
                    src={`http://localhost:4001/${row.images[0]}.jpeg`}
                    alt={`Product image of ${row.name}`}
                    style={{ borderRadius: '10px' }}
                    fill
                  />
                </AspectRatio>
              </td>
              <td>
                <Typography fontWeight={'md'}>{row.name}</Typography>
              </td>
              <td>{row.category}</td>
              <td>{row.price}</td>
              <td>
                <Button
                  variant="plain"
                  color="neutral"
                  aria-label={`menu-${index}`}
                  onClick={event => handleClick(event, row.id, row)}
                >
                  <MoreVertIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Menu
        id="positioned-demo-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="positioned-demo-button"
        placement="bottom-end"
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setModalOpen(true);
          }}
          aria-label="edit"
        >
          <ListItemDecorator>
            <Edit />
          </ListItemDecorator>{' '}
          Edit product
        </MenuItem>
        <ListDivider />
        <MenuItem
          onClick={handleDelete}
          variant="soft"
          color="danger"
          aria-label="delete"
        >
          <ListItemDecorator sx={{ color: 'inherit' }}>
            <DeleteForever />
          </ListItemDecorator>{' '}
          Delete
        </MenuItem>
      </Menu>

      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <ModalDialog layout={'fullscreen'} style={{ overflow: 'scroll' }}>
          <ModalClose aria-label={'close-modal'} />
          {selectedProduct && (
            <ProductEdit
              product={selectedProduct}
              handleCancel={() => {
                setModalOpen(false);
              }}
              productList={productList}
              updateProductList={setProductList}
            />
          )}
        </ModalDialog>
      </Modal>
    </Sheet>
  );
}
