package com.campus;

import android.content.Intent;
import android.net.Uri;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class SharedModule extends ReactContextBaseJavaModule {

    public SharedModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void openSberbank(Callback errorCallback) {
        try {
            Intent sberIntent = getReactApplicationContext().getPackageManager()
                    .getLaunchIntentForPackage("ru.sberbankmobile");
            getReactApplicationContext()
                    .startActivity(sberIntent);
        } catch (Exception e) {
            errorCallback.invoke();
        }

    }

    @ReactMethod
    public void sendEmail(String email, Callback errorCallback) {
        try {
            Intent emailIntent = new Intent(Intent.ACTION_SENDTO);
            emailIntent.setData(Uri.parse("mailto:"));
            emailIntent.putExtra(Intent.EXTRA_EMAIL  , new String[] {email});
            getReactApplicationContext()
                    .startActivity(emailIntent);
        } catch (Exception e) {
            errorCallback.invoke();
        }
    }

    @Override
    public String getName() {
        return "CampusModule";
    }
}
