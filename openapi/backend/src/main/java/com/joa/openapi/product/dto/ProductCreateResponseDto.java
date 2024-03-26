package com.joa.openapi.product.dto;

import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductCreateResponseDto {

    private String name;
    private String description;
    private Long minAmount;
    private Long maxAmount;
    private Double rate;
    private ProductType productType;
    private PaymentType paymentType;
    private Boolean isDone;

    public static ProductCreateResponseDto toDto(Product product) {
        return ProductCreateResponseDto.builder()
                .name(product.getName()) /* TODO 예적금 상품 연결시키면 디폴트 닉네임 예적금 상품명 */
                .description(product.getDescription())
                .minAmount(product.getMinAmount())
                .maxAmount(product.getMaxAmount())
                .rate(product.getRate())
                .productType(product.getProductType())
                .paymentType(product.getPaymentType())
                .isDone(product.getIsDone())
                .build();
    }
}
