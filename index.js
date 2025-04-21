const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const products = [
    {
      id: 1,
      name: 'Áo thun 3158',
      avatar: 'https://dongphuccati.com/images/news/2023/06/original/ao-thun-358-la-gi_1685895683.jpg'
    },
    {
      id: 2,
      name: 'Balo học sinh',
      avatar: 'https://golmart.vn/wp-content/uploads/2019/01/cac-mau-balo-nu-dep.jpg'
    },
    {
        id: 3,
        name: 'Giày thể thao',
        avatar: 'https://media3.scdn.vn/img4/2024/03_09/TBjS6BEn0ljmNZe1hrkx_simg_de2fe0_500x500_maxb.jpg'
    },
    {
        id: 4,
        name: 'Áo khoác Bomber',
        avatar: 'https://product.hstatic.net/200000370449/product/39d5890d348eedd0b49f_56c4e697565743e6bab0e9b3ac51c9c8_master.jpg'
    },
    {
        id: 5,
        name: 'Váy babydoll',
        avatar: 'https://file.hstatic.net/1000284478/file/vay-baby-doll-nen-phoi-voi-giay-gi-2_751d304531bb4f69bb740f257271f26c_grande.jpg'
    },
    {
        id: 6,
        name: 'Váy body',
        avatar: 'https://247store.vn/uploads/products/20210718/z2621295775014f5361f8c0e88fe8d21bcc53c89c9066d.jpg'
    },
    {
        id: 7,
        name: 'Đầm dự tiệc',
        avatar: 'https://images2.thanhnien.vn/528068263637045248/2023/8/25/c2-16929796074741705230479.jpg'
    },
    {
        id: 8,
        name: 'Giày cao gót',
        avatar: 'https://mcshop.vn/upload/125082633_1130451187391370_2566605337931374913_n_-18-11-2020-17-46-51.jpg'
    },
    {
        id: 9,
        name: 'Quần jeans rách gối',
        avatar: 'https://quanjeannugiasi.com/wp-content/uploads/2022/07/f40d11c94e886e0b0d892c2de37b121b.jpg'
    },
    {
        id: 10,
        name: 'Chân váy dài',
        avatar: 'https://salt.tikicdn.com/ts/product/64/8f/59/4bc7b6c4cf899accbf01cac4e72c3ddb.jpg'
    },
    {
        id: 11,
        name: 'Giày thể thao sneaker',
        avatar: 'https://gman.vn/wp-content/uploads/2024/01/giay-sneaker-nam-cao-cap-g68.jpg'
    },
    {
        id: 12,
        name: 'Váy dự tiệc sang chảnh',
        avatar: 'https://dambody.net/image/dam-da-hoi-du-tiec-cheo-vai-sang-trong-rat-dep-69336j.jpg'
    },
    {
        id: 13,
        name: 'Áo khoác gió',
        avatar: 'https://cdn.boo.vn/media/catalog/product/1/_/1.2.08.3.06.002.223.07.10200011_2__5.jpg'
    },
    {
        id: 14,
        name: 'Đồ thể thao',
        avatar: 'https://img.lazcdn.com/g/p/c1619961f97e3f5c2e77db404fda8f6d.jpg_720x720q80.jpg'
    },
    {
        id: 15,
        name: 'Áo thun cotton lạnh',
        avatar: 'https://chuyensiaothun.com.vn/wp-content/uploads/d52-ao-thun-100-cotton-nu-unisex-tay-lo-believe-in-yourself-and-aliens-7938-247x247.jpg'
    },
    {
        id: 16,
        name: 'Mũ lưỡi trai',
        avatar: 'https://www.chapi.vn/img/product/2023/5/25/mu-luoi-trai-nam-wondea-17-new.jpg'
    },
    {
        id: 17,
        name: 'Set bộ nàng thơ',
        avatar: 'https://img.lazcdn.com/g/p/7667fb605c490d641873bfc7c37bd58d.jpg_360x360q75.jpg_.webp'
    },
    {
        id: 18,
        name: 'Chân váy ngắn',
        avatar: 'https://pos.nvncdn.com/b153ea-53436/ps/20240510_j21J3iXIRz.jpeg'
    },
    {
        id: 19,
        name: 'Set bộ tập yoga',
        avatar: 'https://hersign.vn/wp-content/uploads/2024/11/bo-do-tap-yoga-nu-set-do-tap-gym-nu-cao-cap-ao-bra-quan-legging-hersign-smixb34l20a-5.png'
    },
    {
        id: 20,
        name: 'Giày cao gót đính đá',
        avatar: 'https://img.lazcdn.com/g/p/0a610d82675c78de70d29b66b39f88a7.jpg_720x720q80.jpg'
    }
  ];
  
  // API GET - lấy danh sách sản phẩm
app.get('/api/products', (req, res) => {
    res.json(products);
  });
  
  // Khởi động server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });