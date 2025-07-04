CREATE TABLE purchase_order_item (
  po_number     VARCHAR2(20 CHAR)    NOT NULL,
  item_number   NUMBER(6)            NOT NULL,
  material_id   VARCHAR2(20 CHAR),
  quantity      NUMBER(12,3),
  unit_price    NUMBER(15,2),
  delivery_date DATE,
  item_status   VARCHAR2(20 CHAR),
  CONSTRAINT pk_po_item
    PRIMARY KEY (po_number, item_number),
  CONSTRAINT fk_item_po
    FOREIGN KEY (po_number)
    REFERENCES purchase_order_header (po_number)
    ON DELETE CASCADE,
  CONSTRAINT chk_item_status
    CHECK (item_status IN ('Pending','Confirmed','Delivered','Rejected'))
);