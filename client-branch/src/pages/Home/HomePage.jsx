import { FcDislike, FcLike } from 'react-icons/fc';
import Card from './Card/Card';
import styles from './HomePage.module.scss';
import ReviewTable from './ReviewTable/ReviewTable';
import OrderChart from './CustomChart/OrderChart';
import RevenueChart from './CustomChart/RevenueChart';
import { formatVND } from '../../utils/currencyFormatter';
import { useEffect } from 'react';
import moment from 'moment';
import { useState } from 'react';

const mock = {
  foodTrends: {
    bestSeller: {
      name: 'Thập cẩm',
      quantity: 50,
      satisfactionPercent: 80,
      img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    worstSeller: {
      name: 'Trà gừng',
      quantity: 2,
      satisfactionPercent: 50,
      img: 'https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    }
  },
  totalOrders: 820,
  totalRevenue: 42000000,
  reviews: [
    {
      customer: {
        name: 'Nguyễn Văn A',
        avatar: 'https://i.pravatar.cc/300?u=1'
      },
      order: 'Bún bò thập cẩm',
      comment: 'Tuyệt vời!',
      rating: 5,
      date: '2021-08-01'
    },
    {
      customer: {
        name: 'Nguyễn Văn B',
        avatar: 'https://i.pravatar.cc/300?u=2'
      },
      order: 'Trà gừng',
      comment: 'Ngon so với tầm giá',
      rating: 4,
      date: '2021-08-01'
    },
    {
      customer: {
        name: 'Nguyễn Văn C',
        avatar: 'https://i.pravatar.cc/300?u=3'
      },
      order: 'Bún bò tái viên',
      comment: 'Không hài lòng',
      rating: 3,
      date: '2021-10-20'
    },
    {
      customer: {
        name: 'Nguyễn Văn D',
        avatar: 'https://i.pravatar.cc/300?u=4'
      },
      order: 'Bún bò nạm gân',
      comment: 'Không hài lòng. Giao thiếu dụng cụ ăn',
      rating: 1,
      date: '2021-06-02'
    },
    {
      customer: {
        name: 'Nguyễn Văn E',
        avatar: 'https://i.pravatar.cc/300?u=5'
      },
      order: 'Phở đặc biệt',
      comment: 'Rất ngon',
      rating: 5,
      date: '2021-08-01'
    },
    {
      customer: {
        name: 'Nguyễn Văn F',
        avatar: 'https://i.pravatar.cc/300?u=6'
      },
      order: 'Bún bò thập cẩm',
      comment: 'Ngon',
      rating: 5,
      date: '2022-01-02'
    }
  ],
  statistics: require('../../assets/fake-data/statistics.json')
};

function HomePage() {
  const [data, setData] = useState();
  const [orderChartData, setOrderChartData] = useState();
  const [revenueChartData, setRevenueChartData] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/order/branch', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        MACN: '1',
        TGBD: moment().subtract(2, 'year').format('YYYY-MM-DD'),
        TGKT: moment().format('YYYY-MM-DD'),
        TRANGTHAIDH: 'DELIVERED'
      })
    }).then(res => res.json()).then(data => {
      setData(data.data);
    });
  }, []);

  return (
    <main className={styles.homePage}>
      <section className={styles.overview}>
        <Card title='Food trends' className={styles.foodTrendsCard}>
          <ul className={styles.foodTrendsList}>
            <li className={styles.foodTrendItem}>
              <div className={styles.foodTrendInfo}>
                <h4 className={styles.foodTrendName}>
                  {mock.foodTrends.bestSeller.name}
                  <FcLike className={styles.foodTrendIcon} />
                </h4>
                <p className={styles.foodTrendQuantity}>
                  {mock.foodTrends.bestSeller.quantity} orders
                </p>
                <p className={styles.foodTrendSatisfaction}>
                  {mock.foodTrends.bestSeller.satisfactionPercent}% satisfaction
                </p>
              </div>

              <div className={styles.foodTrendImgWrapper}>
                <img
                  src={mock.foodTrends.bestSeller.img}
                  alt={mock.foodTrends.bestSeller.name}
                  className={styles.foodTrendImg}
                />
              </div>
            </li>

            <li className={styles.foodTrendItem}>
              <div className={styles.foodTrendInfo}>
                <h4 className={styles.foodTrendName}>
                  {mock.foodTrends.worstSeller.name}
                  <FcDislike className={styles.foodTrendIcon} />
                </h4>
                <p className={styles.foodTrendQuantity}>
                  {mock.foodTrends.worstSeller.quantity} orders
                </p>
                <p className={styles.foodTrendSatisfaction}>
                  {mock.foodTrends.worstSeller.satisfactionPercent}%
                  satisfaction
                </p>
              </div>

              <div className={styles.foodTrendImgWrapper}>
                <img
                  src={mock.foodTrends.worstSeller.img}
                  alt={mock.foodTrends.worstSeller.name}
                  className={styles.foodTrendImg}
                />
              </div>
            </li>
          </ul>
        </Card>

        <Card title='Total orders' className={styles.totalOrderCard}>
          <div className={styles.wrapper}>
            <p className={styles.totalOrders}>{data?.Statics[0].SOLUONG}</p>

            <img
              src='assets/imgs/total-orders.png'
              alt='Total orders'
              className={styles.totalOrdersImg}
            />
          </div>
        </Card>

        <Card title='Total revenue' className={styles.totalRevenueCard}>
          <div className={styles.wrapper}>
            <p className={styles.totalRevenue}>
              {formatVND(data?.Statics[0].DOANHTHU)}
            </p>

            <img
              src='assets/imgs/revenue.png'
              alt='Total revenue'
              className={styles.totalRevenueImg}
            />
          </div>
        </Card>

        <Card title='Orders chart' className={styles.chart}>
          <OrderChart data={mock.statistics} />
        </Card>

        <Card title='Revenues chart' className={styles.chart}>
          <RevenueChart data={mock.statistics} />
        </Card>

        <Card title='Reviews' className={styles.reviewsCard}>
          <ReviewTable data={mock.reviews} />
        </Card>
      </section>
    </main>
  );
}

export default HomePage;
