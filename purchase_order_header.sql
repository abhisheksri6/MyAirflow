CREATE TABLE purchase_order_header (
  po_number     VARCHAR2(20 CHAR)    NOT NULL,
  company_code  VARCHAR2(10 CHAR),
  plant         VARCHAR2(10 CHAR),
  po_date       DATE,
  vendor_id     VARCHAR2(20 CHAR),
  currency      VARCHAR2(3 CHAR),
  total_amount  NUMBER(15,2),
  status        VARCHAR2(20 CHAR),
  CONSTRAINT pk_po_header
    PRIMARY KEY (po_number),
  CONSTRAINT chk_po_currency
    CHECK (REGEXP_LIKE(currency, '^[A-Z]{3}$')),
  CONSTRAINT chk_po_status
    CHECK (status IN ('Open', 'Submitted', 'Approved', 'Closed', 'Cancelled'))
);