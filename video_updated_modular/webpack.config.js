const path = require("path");
const settings = require('./src/config/settings.json');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "output"),
    filename: "video_updated_7.js"
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, "src/config"),
    }
  },
  optimization: {
    usedExports: true, // Enables tree shaking
    concatenateModules: true,
    minimize: true,
    minimizer: [new TerserPlugin({
      
      terserOptions: {
        compress: {
          dead_code: true,
          drop_console: true,
          pure_funcs: ['debugLog'],
          pure_getters: true
        },
      }
    })
  ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CMP: JSON.stringify(settings.pre_execution.consent_management.enabled),
      preroll: JSON.stringify(settings.execution.ad_units.preroll.enabled),
      viewport_var: JSON.stringify(settings.pre_execution.player_visibility.check_viewport_variable),
      cust_key_status: JSON.stringify(settings.execution.ad_units.preroll.cust_keys.length > 0),
      overlay_ads: JSON.stringify(settings.pre_execution.player_visibility.overlay_ads),
      overlay_ads_content: JSON.stringify(settings.pre_execution.player_visibility.overlay_ads_content),
      overlay_viewport_ads: JSON.stringify(settings.pre_execution.player_visibility.overlay_outside_viewport),
      overlay_viewport_ads_content: JSON.stringify(settings.pre_execution.player_visibility.overlay_outside_viewport_2),
      pause_play_case: JSON.stringify(settings.pre_execution.player_visibility.pause_outside_viewport),
      viewport_functions: JSON.stringify(settings.pre_execution.player_visibility.viewport_functions),
      mobile_width: JSON.stringify(settings.script_variables.isVidMobile),
      close_can_exec: JSON.stringify(settings.script_variables.close_can_exec),
      ad_fill_status: JSON.stringify(settings.script_variables.ad_fill),
      midroll: JSON.stringify(settings.execution.ad_units.midroll.enabled),
      multi_midroll: JSON.stringify(settings.execution.ad_units.midroll.midroll_throughout),
      postroll: JSON.stringify(settings.execution.ad_units.postroll.enabled),
      postroll_can_run: JSON.stringify(settings.execution.ad_units.postroll.postroll_can_run),
      modal: JSON.stringify(settings.post_execution.modal_settings.enabled),
      modal_css: JSON.stringify(settings.post_execution.modal_settings.css_enabled),
      replay_func: JSON.stringify(settings.post_execution.modal_settings.replay_player),
      quality_use: JSON.stringify(settings.pre_execution.video_source.enable_quality),
      prebid: JSON.stringify(settings.execution.prebid.enabled)
    }),
  ],
}