package com.example.mailapp.util;
import ohos.ace.ability.LocalParticleAbility;
import ohos.miscservices.inputmethodability.KeyboardController;

public class UtilServiceAbility implements LocalParticleAbility {
    static LocalParticleAbility localParticleAbility = null;

    public static LocalParticleAbility getInstance() {
        if (localParticleAbility == null) {
            localParticleAbility = new UtilServiceAbility();
        }
        return localParticleAbility;
    }

    public void hideKeyboard() {
    }
}
