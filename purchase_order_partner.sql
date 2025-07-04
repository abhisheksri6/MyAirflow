CREATE TABLE purchase_order_partner (
  po_number    VARCHAR2(20 CHAR)    NOT NULL,
  partner_role VARCHAR2(20 CHAR)    NOT NULL,
  partner_id   VARCHAR2(20 CHAR)    NOT NULL,
  CONSTRAINT pk_po_partner
    PRIMARY KEY (po_number, partner_role, partner_id),
  CONSTRAINT fk_partner_po
    FOREIGN KEY (po_number)
    REFERENCES purchase_order_header (po_number)
    ON DELETE CASCADE,
  CONSTRAINT chk_partner_role
    CHECK (partner_role IN ('Buyer','Supplier','Approver','Receiver'))
);