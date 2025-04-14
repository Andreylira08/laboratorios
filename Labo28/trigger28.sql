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

--TRIGER 2 

DELIMITER //

CREATE TRIGGER tr_valida_cantidad_positiva
BEFORE INSERT ON Entregan
FOR EACH ROW
BEGIN
    IF NEW.Cantidad <= 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: La cantidad debe ser mayor a cero.';
    END IF;
END //

DELIMITER ;

--PRUEBA

-- Insertar entrega con cantidad negativa 
INSERT INTO Entregan VALUES (9999, 'AAAA800101', 5000, '15/12/2023', -100);
-- Mensaje: Error: La cantidad debe ser mayor a cero.


--TRIGER 3

DELIMITER //

CREATE TRIGGER tr_protege_proyectos_con_entregas
BEFORE DELETE ON Proyectos
FOR EACH ROW
BEGIN
    DECLARE v_entregas INT;
    
    -- Verificar si el proyecto tiene entregas
    SELECT COUNT(*) INTO v_entregas
    FROM Entregan
    WHERE numero = OLD.Numero;
    
    IF v_entregas > 0 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Error: No se puede eliminar un proyecto con entregas registradas.';
    END IF;
END //

DELIMITER ;

-- Intentar eliminar el proyecto "Vamos Mexico" 
DELETE FROM Proyectos WHERE Numero = 5000;
-- Mensaje: Error: No se puede eliminar un proyecto con entregas registradas.