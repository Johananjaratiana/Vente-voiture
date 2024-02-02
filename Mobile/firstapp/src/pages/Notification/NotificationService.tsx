// NotificationService.ts
import { PushNotifications, PushNotificationSchema, Token, ActionPerformed } from "@capacitor/push-notifications";
import { useNotification } from "./NotificationContext";
import { Toast } from "@capacitor/toast";
import { WEB_SERVICE_URL } from "../../constants";
import { Storage } from '@ionic/storage';



class NotificationService {
    static init() {

        const showToast = async (msg: string) => {
            await Toast.show({
                text: msg
            })
        }

        const saveNotificationToken = async (tokenNotification: Token) => {
            try {
                const store = new Storage();
                showToast("111111111111111111111111111111111111111")
                await store.create();
                showToast("2222222222222222222222222222")
                const idUser:number = await store.get('idUser');
                showToast("333333333333333333333333333")
                const token = await store.get('token');
                showToast("4444444444444444444444444444444444")
                const datas = {
                    token: tokenNotification.value,
                    idUsers: idUser
                }
                showToast(datas + "ERROR 0 ")
                const response = await fetch(WEB_SERVICE_URL + '/user_notifications', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    
                    body: JSON.stringify(datas),
                });
                showToast(response.json()+"ERROR1")
            } catch (error) {
                showToast(error+"ERROR2")
            }
        }

        const register = () => {
            PushNotifications.register();
            PushNotifications.addListener('registration',
                (token: Token) => {
                    showToast(token.value);
                    saveNotificationToken(token)
                }
            );
            PushNotifications.addListener(
                'pushNotificationReceived',
                (notification: PushNotificationSchema) => {
                    // Handle the received notification globally
                    console.log('Push received', notification);

                    // Set the notification in context
                    const { setNotification } = useNotification();
                    setNotification(notification);
                }
            );
        }

        PushNotifications.checkPermissions().then((res) => {
            if (res.receive !== 'granted') {
                PushNotifications.requestPermissions().then((res) => {
                    if (res.receive === 'denied') {
                        showToast('Push Notification permission denied');
                    }
                    else {
                        showToast('Push Notification permission granted');
                        register();
                    }
                });
            }
            else {
                register();
            }
        });

        // PushNotifications.requestPermissions().then((permissionResult) => {
        //     if (permissionResult.receive === 'granted') {
        //         PushNotifications.addListener(
        //             'pushNotificationReceived',
        //             (notification: PushNotificationSchema) => {
        //                 // Handle the received notification globally
        //                 console.log('Push received', notification);

        //                 // Set the notification in context
        //                 const { setNotification } = useNotification();
        //                 setNotification(notification);
        //             }
        //         );
        //     }
        // });
    }
}

export default NotificationService;
