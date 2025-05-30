import React, { useEffect, useRef } from 'react';
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode';
import { postToken } from '../api/review';

interface QrScannerProps {
    isAuthorized: boolean
    setIsAuthorized: (result: boolean) => void;
    setToken: (result: string) => void;
}

const QrScanner: React.FC<QrScannerProps> = ({ isAuthorized, setIsAuthorized, setToken }) => {
    const hasStartedRef = useRef(false);
    const qrCodeRegionId = 'html5qr-code-full-region';
    const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
    const closeRef = useRef(false);


    //qr 확인 함수
    const handleQrScan = (result: string) => {
        if (isAuthorized) return;

        if (!result.startsWith("team5-toReviewQR")) {
            alert("올바른 QR 코드를 스캔해주세요.");
            return;
        }

        let isValid: boolean;

        const fetchToken = async () => {
            try {
                const response = await postToken(result);
                isValid = response.result;

                // ✅ 여기서 후속 로직 실행
                if (isValid) {
                    closeRef.current = true;
                    // console.log(close);
                    setToken(result);
                    setIsAuthorized(true);
                } else {
                    setIsAuthorized(false);
                    alert("이미 리뷰를 작성하셨습니다.");
                }
            } catch (error) {
                alert("QR 코드 검증 중 오류가 발생했습니다.");
            }
        };

        // ✅ 실제로 실행
        fetchToken();
    };

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

                if (!hasStartedRef.current) {
                    hasStartedRef.current = true;
                    html5QrCode
                        .start(
                            cameraId,
                            config,
                            (decodedText) => {
                                if (decodedText.startsWith("team5-toReviewQR")) {
                                    handleQrScan(decodedText); // ✅ 부모에 데이터 전달
                                    hasStartedRef.current = false;

                                    if (closeRef.current) {
                                        html5QrCode.stop().then(() => {
                                            html5QrCode.clear();
                                        });
                                    }
                                } else {
                                    alert("올바른 QR 코드를 스캔해주세요.");
                                }
                            },
                            (_) => {
                            }
                        )
                        .catch((err) => {
                            console.error("Camera start error:", err);
                            hasStartedRef.current = false;
                        });
                }
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