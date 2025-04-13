BEGIN
    DECLARE v_ProveedorExiste INT;
    DECLARE v_MaterialExiste INT;
    DECLARE v_ProyectoExiste INT;

    -- Verificar existencia del proveedor
    SELECT COUNT(*) INTO v_ProveedorExiste
    FROM Proveedores
    WHERE RFC = p_RFCProveedor;

    -- Verificar existencia del material
    SELECT COUNT(*) INTO v_MaterialExiste
    FROM Materiales
    WHERE clave = p_ClaveMaterial;

    -- Verificar existencia del proyecto
    SELECT COUNT(*) INTO v_ProyectoExiste
    FROM Proyectos
    WHERE Numero = p_NumeroProyecto;

    -- Validar e insertar
    IF v_ProveedorExiste = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Proveedor no existe';
    ELSEIF v_MaterialExiste = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Material no existe';
    ELSEIF v_ProyectoExiste = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Proyecto no existe';
    ELSE
        INSERT INTO entregan (
            clave,
            rfc,
            numero,
            Fecha,
            Cantidad
        ) VALUES (
            p_ClaveMaterial,
            p_RFCProveedor,
            p_NumeroProyecto,
            STR_TO_DATE(p_Fecha, '%d/%m/%Y'),
            p_Cantidad
        );
    END IF;
END

CALL InsertarEntrega(1000, 'AAAA800101', 5000, '8/7/1998', 165);