import React, { useEffect, useRef } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';

interface QrScannerProps {
    onScanSuccess: (result: string) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ onScanSuccess }) => {
    const qrCodeRegionId = 'html5qr-code-full-region';
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null);

    useEffect(() => {
        const config = {
            fps: 10,
            qrbox: 250,
        };

        const html5QrCode = new Html5Qrcode(qrCodeRegionId);
        html5QrCodeRef.current = html5QrCode;

        Html5Qrcode.getCameras().then((devices) => {
            if (devices && devices.length) {
                const cameraId = devices[0].id;

                html5QrCode
                    .start(
                        cameraId,
                        config,
                        (decodedText) => {
                            html5QrCode.stop().then(() => {
                                onScanSuccess(decodedText); // 👉 부모에게 전달
                            });
                        },
                        (_) => {
                        }
                    )
                    .catch((err) => {
                        console.error("Camera start error:", err);
                    });
            }
        });

        return () => {
            if (html5QrCodeRef.current?.getState() === Html5QrcodeScannerState.SCANNING) {
                html5QrCodeRef.current.stop().then(() => {
                    html5QrCodeRef.current?.clear();
                });
            }
        };
    }, []);

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>QR 코드 스캐너</h2>
            <div id={qrCodeRegionId} style={{ width: '300px', margin: 'auto' }} />
        </div>
    );
};

export default QrScanner;
