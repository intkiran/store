import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
    {
      id: 1,
      url: 'assets/images/Image-Master-1.png',
      name: 'Flowy Dress with pink and gold',
      brand: 'Burberry',
      retailPrice: 129.99,
      size: 4,
      rentalPrice: 12.0,
    },
    {
      id: 2,
      url: 'assets/images/Image-Master-2.png',
      name: 'Beach Dress',
      brand: 'Prada',
      retailPrice: 129.99,
      size: 8,
      rentalPrice: 12.0,
    },
    {
      id: 3,
      url: 'assets/images/Image-Master-3.png',
      name: 'Res Dress for evening wear',
      brand: 'Bandage',
      retailPrice: 129.99,
      size: 12,
      rentalPrice: 12.0,
    },
    {
      id: 4,
      url: 'assets/images/Image-Master-4.png',
      name: 'Wedding Guest',
      brand: 'Prada',
      retailPrice: 129.99,
      size: 12,
      rentalPrice: 12.0,
    },
    {
      id: 5,
      url: 'assets/images/Image-Master-5.png',
      name: 'Nighwear',
      brand: 'Ansell',
      retailPrice: 129.99,
      size: 14,
      rentalPrice: 12.0,
    },
    {
      id: 6,
      url: 'assets/images/Image-Master-1.png',
      name: 'Summer Dress',
      brand: 'Desacada',
      retailPrice: 129.99,
      size: 8,
      rentalPrice: 12.0,
    },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find((product) => product.id === id));
  }
}
