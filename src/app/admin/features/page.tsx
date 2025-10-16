'use client'
import { Carousel } from 'react-bootstrap';
import styles from "./styles.module.css";


export default function FeaturesPage() {
  return (
    <>
      <h1>FEATURES</h1>
      <Carousel className={styles.carousel}>
        <Carousel.Item>
          <img src="https://blog.gerandofalcoes.com/wp-content/uploads/2022/10/moda-circular-e1668766786832.jpg"
         
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://neon.com.br/aprenda/wp-content/uploads/2024/09/Quantas-pecas-de-roupa-preciso-para-abrir-uma-loja.webp"
         
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src="https://cdn.prod.website-files.com/6283dd6a421d2ab90216d5f9/64079c7e4900f4c0550c1397_roupas-mais-vendem-thumbnail-image.jpg"
          
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
