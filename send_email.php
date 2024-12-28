<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Assicurati che il path sia corretto

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Dati del form
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $city = htmlspecialchars($_POST['city']);
    $tattooLocation = htmlspecialchars($_POST['tattoo-location']);
    $referral = htmlspecialchars($_POST['referral']);
    $budget = htmlspecialchars($_POST['budget']);
    $additionalInfo = htmlspecialchars($_POST['additional-info']);

    // Crea il corpo del messaggio
    $message = "
        <p>Hai ricevuto una nuova richiesta di contatto:</p>
        <ul>
            <li><strong>Nome:</strong> $firstName</li>
            <li><strong>Cognome:</strong> $lastName</li>
            <li><strong>Email:</strong> $email</li>
            <li><strong>Telefono:</strong> $phone</li>
            <li><strong>Città:</strong> $city</li>
            <li><strong>Posizione del Tatuaggio:</strong> $tattooLocation</li>
            <li><strong>Dove hai sentito parlare di me:</strong> $referral</li>
            <li><strong>Budget:</strong> $budget</li>
            <li><strong>Altro:</strong> $additionalInfo</li>
        </ul>
    ";

    $mail = new PHPMailer(true);
    try {
        // Impostazioni server SMTP di Gmail
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'pieromomento@gmail.com';  // Usa la tua email Gmail
        $mail->Password = 'Giampiero1.';  // Usa la tua password (o password per app se hai 2FA)
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinatario e mittente
        $mail->setFrom('pieromomento@gmail.com', 'Nome del tuo sito');
        $mail->addAddress('pieromomento@gmail.com');  // Dove riceverai le email

        // Oggetto e contenuto
        $mail->isHTML(true);
        $mail->Subject = 'Richiesta di contatto da ' . $firstName . ' ' . $lastName;
        $mail->Body    = $message;

        // Allegati (se ci sono)
        if (!empty($_FILES['photos']['name'][0])) {
            for ($i = 0; $i < count($_FILES['photos']['name']); $i++) {
                if ($_FILES['photos']['error'][$i] === UPLOAD_ERR_OK) {
                    $filePath = $_FILES['photos']['tmp_name'][$i];
                    $fileName = $_FILES['photos']['name'][$i];
                    $mail->addAttachment($filePath, $fileName);
                }
            }
        }

        // Invia l'email
        $mail->send();
        echo 'Messaggio inviato con successo!';
    } catch (Exception $e) {
        echo "Errore nell'invio del messaggio. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
