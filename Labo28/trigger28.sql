CREATE TRIGGER validar_entrega 
BEFORE INSERT ON entregan FOR EACH ROW BEGIN 
-- Verificar existencia del proveedor 

IF NOT EXISTS (SELECT 1 FROM proveedores WHERE rfc= NEW.rfc) 
THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El proveedor no existe'; 
END IF;
-- Verificar existencia del proyecto

IF NOT EXISTS (SELECT 1 FROM proyectos WHERE numero = NEW.numero) 
THEN SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'El proyecto no existe'; 
END IF; 

-- Opcional: asignar fecha actual a la entrega 

SET NEW.fecha = NOW(); END;