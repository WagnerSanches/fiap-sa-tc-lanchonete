

CREATE TABLE Item (
    id_item SERIAL PRIMARY KEY,      
    name VARCHAR(255) NOT NULL,        
    description TEXT,                   
    type VARCHAR(20),                
    cooking_time TIME NOT NULL,
    price DECIMAL(5,2)
);

CREATE TABLE Payment (
    id_payment SERIAL PRIMARY KEY, 
    status VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Client (
    id_client SERIAL PRIMARY KEY,
    document VARCHAR(11) UNIQUE NOT NULL,
    email VARCHAR(100),
    name VARCHAR(100)
);


CREATE TABLE Orders (
    id_order SERIAL PRIMARY KEY,
    id_payment INTEGER NOT NULL,
    status VARCHAR(20),
    document varchar(11),
    price DECIMAL(5, 2),
    quantity_items INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_payment FOREIGN KEY (id_payment) REFERENCES Payment(id_payment)
);


CREATE TABLE OrderItems (
    id_order INTEGER NOT NULL,
    id_item INTEGER NOT NULL,
    PRIMARY KEY (id_order, id_item),
    CONSTRAINT fk_order FOREIGN KEY (id_order) REFERENCES Orders(id_order),
    CONSTRAINT fk_item FOREIGN KEY (id_item) REFERENCES Item(id_item)
);