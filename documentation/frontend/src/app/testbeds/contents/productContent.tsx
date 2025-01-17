//productCreateContent
//productreadContent
//productUpdateContent
//productListContent
//productDeleteContent

export const productCreateContent = {
  title: "예적금상품 등록",
  desc: "은행에 가입하여 예적금상품을 등록하는 API입니다. 상품 이름, 설명, 입금 최소/최대 한도, 금리, 상품 타입, 지급 타입을 등록할 수 있습니다.",
  method: "POST",
  uri: "product",
  requestParam: [
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "minAmount",
      desc: "입금 최소 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "maxAmount",
      desc: "입금 최대 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "rate",
      desc: "금리",
      type: "Double",
      required: "Y",
      etc: "% 단위",
    },
    {
      name: "productType",
      desc: "상품 타입",
      type: "String",
      required: "Y",
      etc: "ORDINARY_DEPOSIT, TERM_DEPOSIT, FIXED_DEPOSIT",
    },
    {
      name: "paymentType",
      desc: "지급 타입",
      type: "String",
      required: "Y",
      etc: "SIMPLE, COMPOUND",
    },
    {
      name: "bankId",
      desc: "은행 아이디",
      type: "String",
      required: "Y",
      etc: "UUID ",
    },
  ],
  requestExample: `
    {
        "name" : "싸피조아적금",
        "description" : "싸피 교육지원금 매달 일정 금액 적금을 장려하는 상품",
        "minAmount" : "10000",
        "maxAmount" : "500000",
        "rate" : "10",
        "productType" : "TERM_DEPOSIT",
        "paymentType" : "SIMPLE",
        "bankId" : "aa01973d-0fa6-4d2b-ab92-32ff227d8677"
    }
    `,
  responseParam: [
    {
      name: "productId",
      desc: "상품 아이디",
      type: "String",
      required: "Y",
      etc: "UUID",
    },
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "minAmount",
      desc: "입금 최소 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "maxAmount",
      desc: "입금 최대 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "rate",
      desc: "금리",
      type: "Double",
      required: "Y",
      etc: "% 단위",
    },
    {
      name: "productType",
      desc: "상품 타입",
      type: "String",
      required: "Y",
      etc: "ORDINARY_DEPOSIT, TERM_DEPOSIT, FIXED_DEPOSIT",
    },
    {
      name: "paymentType",
      desc: "지급 타입",
      type: "String",
      required: "Y",
      etc: "SIMPLE, COMPOUND",
    },
    {
      name: "bankId",
      desc: "은행 아이디",
      type: "String",
      required: "Y",
      etc: "UUID ",
    },
    {
      name: "isDone",
      desc: "종료 여부",
      type: "Boolean",
      required: "Y",
      etc: " ",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "상품 등록에 성공했습니다.",
        "data": { 
            "productId": 
            "23589bc9-02fd-4f16-bf0e-0acad006efe1", 
            "name": "싸피조아적금", 
            "description": "싸피 교육지원금 매달 일정 금액 적금을 장려하는 상품", 
            "minAmount": 10000, 
            "maxAmount": 500000, 
            "rate": 10, 
            "productType": "TERM_DEPOSIT", 
            "paymentType": "SIMPLE", 
            "isDone": false, 
            "createdAt": "2024-04-03 10:17", 
            "updatedAt": "2024-04-03 10:17" 
        },
        "page": null
    }
    `,
  errorCode: [
    {
      name: "",
      httpstatus: "",
      desc: "",
    },
  ],
};

export const productReadContent = {
  title: "예적금상품 상세 조회",
  desc: "등록되어있는 예적금상품의 정보를 상세조회하는 API입니다. 예적금상품을 신청하기 전, 예적금상품의 정보를 확인하고 신청할 수 있습니다.",
  method: "GET",
  uri: "product/{productId}",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "productId",
      desc: "상품 아이디",
      type: "String",
      required: "Y",
      etc: "UUID",
    },
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "minAmount",
      desc: "입금 최소 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "maxAmount",
      desc: "입금 최대 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "rate",
      desc: "금리",
      type: "Double",
      required: "Y",
      etc: "% 단위",
    },
    {
      name: "productType",
      desc: "상품 타입",
      type: "String",
      required: "Y",
      etc: "ORDINARY_DEPOSIT, TERM_DEPOSIT, FIXED_DEPOSIT",
    },
    {
      name: "paymentType",
      desc: "지급 타입",
      type: "String",
      required: "Y",
      etc: "SIMPLE, COMPOUND",
    },
    {
      name: "bankId",
      desc: "은행 아이디",
      type: "String",
      required: "Y",
      etc: "UUID ",
    },
    {
      name: "isDone",
      desc: "종료 여부",
      type: "Boolean",
      required: "Y",
      etc: " ",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "예적금 상품 상세 조회에 성공했습니다.",
        "data": { 
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb", 
            "name": "보통예금", 
            "description": "예시 설명", 
            "minAmount": 0, 
            "maxAmount": 1000000, 
            "rate": 5.0, 
            "productType": "ORDINARY_DEPOSIT", 
            "paymentType": "SIMPLE", 
            "isDone": false, 
            "bankId": "ef67408b-3107-45b8-9ff5-ac1305a34b47" 
        },
        "page": null
    }
    `,
  errorCode: [
    {
      name: "NO_PRODUCT",
      httpstatus: "BAD_REQUEST",
      desc: "해당 상품이 존재하지 않습니다.",
    },
  ],
};

export const productUpdateContent = {
  title: "예적금상품 종료",
  desc: "예적금 상품을 종료하는 API입니다. 예적금상품이 종료된 후에는 해당 상품에 가입할 수 없습니다.",
  method: "PATCH",
  uri: "product/{productId}",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "isDone",
      desc: "종료 여부",
      type: "Boolean",
      required: "Y",
      etc: " ",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "상품 종료에 성공했습니다.",
        "data": {
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb",
            "name": "보통예금",
            "isDone": false,
            "createdAt": "2024-03-30 17:34",
            "updatedAt": "2024-03-30 17:34"
        },
        "page": null
    }
    `,
  errorCode: [
    {
      name: "ALREADY_DONE",
      httpstatus: "BAD_REQUEST",
      desc: "해당 상품은 이미 종료되었습니다.",
    },
    {
      name: "CANT_DONE",
      httpstatus: "BAD_REQUEST",
      desc: "해당 상품에 계좌가 연결되어 있어 종료할 수 없습니다.",
    },
  ],
};

export const productListContent = {
  title: "예적금상품 목록 조회/검색",
  desc: "예적금상품을 조회할 수 있는 API입니다. 특정 조건이 없으면 전체 조회가 되고, 특정 조건으로 원하는 상품 조회도 가능합니다.",
  method: "GET",
  uri: "product/search",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "productId",
      desc: "상품 아이디",
      type: "String",
      required: "Y",
      etc: "UUID",
    },
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "minAmount",
      desc: "입금 최소 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "maxAmount",
      desc: "입금 최대 한도",
      type: "Long",
      required: "Y",
      etc: "",
    },
    {
      name: "rate",
      desc: "금리",
      type: "Double",
      required: "Y",
      etc: "% 단위",
    },
    {
      name: "productType",
      desc: "상품 타입",
      type: "String",
      required: "Y",
      etc: "ORDINARY_DEPOSIT, TERM_DEPOSIT, FIXED_DEPOSIT",
    },
    {
      name: "paymentType",
      desc: "지급 타입",
      type: "String",
      required: "Y",
      etc: "SIMPLE, COMPOUND",
    },
    {
      name: "bankId",
      desc: "은행 아이디",
      type: "String",
      required: "Y",
      etc: "UUID ",
    },
    {
      name: "isDone",
      desc: "종료 여부",
      type: "Boolean",
      required: "Y",
      etc: " ",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "예적금 상품 조회에 성공했습니다.",
        "data": null,
        "page": {
            "content": [ 
                { 
                    "productId": "1026d98a-b6be-4cf5-9dc0-c96c310a5e1e", 
                    "name": "보통 예금", 
                    "description": "은행 생성 시 자동 생성 되는 보통 예금", 
                    "minAmount": 0, 
                    "maxAmount": 100000000, 
                    "rate": 1, 
                    "productType": "ORDINARY_DEPOSIT", 
                    "paymentType": "SIMPLE", 
                    "isDone": false, 
                    "bankId": "3cf6f866-3fbd-46c8-85a1-96ab39551a35" 
                }, 
                { 
                    "productId": "23589bc9-02fd-4f16-bf0e-0acad006efe1", 
                    "name": "싸피조아적금", 
                    "description": "싸피 교육지원금 매달 일정 금액 적금을 장려하는 상품", 
                    "minAmount": 10000, 
                    "maxAmount": 500000, 
                    "rate": 10, 
                    "productType": "TERM_DEPOSIT", 
                    "paymentType": "SIMPLE", 
                    "isDone": false, 
                    "bankId": "50708cd7-a6b4-4cf6-8fa5-46952c79e3f2" 
                }
            ], 
            "page": 0,
            "size": 10, 
            "totalElements": 16, 
            "totalPages": 2,
            "last": false 
        }
    }
    `,
  errorCode: [],
};

export const productDeleteContent = {
  title: "예적금상품 삭제",
  desc: "예적금상품을 삭제하는 API입니다. 종료된 예적금상품 중에서 가입한 고객이 없을 경우에만 삭제가능합니다.",
  method: "DELETE",
  uri: "product/{productId}",
  requestParam: [],
  requestExample: ``,
  responseParam: [
    {
      name: "name",
      desc: "상품 이름",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "상품 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "isDone",
      desc: "종료 여부",
      type: "Boolean",
      required: "Y",
      etc: " ",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "상품 해지에 성공했습니다.",
        "data": {
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb",
            "name": "보통예금",
            "isDone": true,
            "createdAt": "2024-03-30 17:34",
            "updatedAt": "2024-03-30 17:34"
        },
        "page": null
    }
    `,
  errorCode: [
    {
      name: "NO_PRODUCT",
      httpstatus: "BAD_REQUEST",
      desc: "해당 상품이 존재하지 않습니다.",
    },
  ],
};
