package com.campus;

import android.content.Intent;
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

    @Override
    public String getName() {
        return "CampusModule";
    }
}
