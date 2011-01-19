{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    // The homepage for your ROM, if you have one.
    homepage: "http://bekit.net/",
    // The donate link for yuor ROM, if you have one.
    donate: "http://www.marchforbabies.org/personal_page.asp?pp=293405&ct=4&w=4496404&u=bekit&bt=2",
    // Your list of ROMs
    roms:
    [
    {
        // Display name of the rom
        name: "CyanogenMod 7.0 Harmony Beta1",
        // Display summary of the rom
        summary: "Beta of CM for Viewsonic G Tablet",
        // Device that this rom runs on
        device: "harmony",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "CyanogenMod Harmony Beta",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 7001,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-7.0.0-Beta1-Harmony",
        // Some Screenshots that show off the ROM!
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version.
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://dropbox.bekit.net/Android/gtablet/cyanogenmod/update-cm-7.0.0-Beta1-Harmony-signed.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://goo-inside.me/google-apps/gapps-gb-20110115-signed.zip"
            ]
        }
        ]
    },
    {
        // Display name of the rom
        name: "CyanogenMod 6.2 Harmony Beta1",
        // Display summary of the rom
        summary: "Beta of CM for Viewsonic G Tablet",
        // Device that this rom runs on
        device: "harmony",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "CyanogenMod Harmony Beta",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 6201,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "CyanogenMod-6.2.0-Beta1-Harmony",
        // Some Screenshots that show off the ROM!
        screenshots:
        [
        "http://koush.tandtgaming.com//motorola/sholes/screeshot.png",
        "http://koush.tandtgaming.com//motorola/sholes/screenshot2.png"
        ],
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
        "http://dropbox.bekit.net/Android/gtablet/cyanogenmod/update-cm-6.2.0-Beta1-Harmony-signed.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "Google Apps",
            urls:
            [
            "http://android.d3xt3r01.tk/cyanogen/gapps/gapps-mdpi-tegra-20101020-signed.zip"
            ]
        }
        ]
    }
    ]
}
