<?php
header("Content-Type: application/json");
include "../db_config.php";

try {
    $stmt = $conn->prepare("SELECT nombre_noticias, href_noticia FROM 2_noticias");
    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>
