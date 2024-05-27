import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../interfaces/Product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] | undefined;
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  deleteProduct(id: string | number | undefined): void {
    if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Xóa sản phẩm thành công');
        // load lại danh sách
        this.productService.getProducts().subscribe((products) => {
          this.products = products;
        });
      });
    }
  }
}
