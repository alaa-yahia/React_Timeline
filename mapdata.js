var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "300", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "#88A4BC",
    state_hover_color: "#7fa7c8",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "yes",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "no",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    SDN148: {
      name: "Blue Nile"
    },
    SDN149: {
      name: "Red Sea"
    },
    SDN5856: {
      name: "Southern Darfur",
      color: "#DBA32F",
      inactive: "no"
    },
    SDN5857: {
      name: "Eastern Darfur"
    },
    SDN5858: {
      name: "Western Darfur"
    },
    SDN5859: {
      name: "Central Darfur"
    },
    SDN874: {
      name: "Khartoum",
      color: "#DBA32F",
      hover_color: "#3b729f",
      inactive: "no"
    },
    SDN875: {
      name: "Gezira"
    },
    SDN876: {
      name: "Gedarif"
    },
    SDN877: {
      name: "River Nile"
    },
    SDN878: {
      name: "Northern"
    },
    SDN879: {
      name: "White Nile"
    },
    SDN880: {
      name: "Sennar"
    },
    SDN881: {
      name: "North Darfur",
      color: "#DBA32F",
      inactive: "no"
    },
    SDN882: {
      name: "South Kordufan",
      hover_color: "#3b729f"
    },
    SDN883: {
      name: "North Kordufan"
    },
    SDN884: {
      name: "Kassala"
    }
  },
  locations: {},
  labels: {
    "0": {
      name: "Blue Nile",
      parent_id: "SDN148",
      x: 728,
      y: 665.2
    },
    "1": {
      name: "Red Sea",
      parent_id: "SDN149",
      x: 810,
      y: 138
    },
    "2": {
      name: "Southern Darfur",
      parent_id: "SDN5856",
      x: 145.2,
      y: 720.9
    },
    "3": {
      name: "Eastern Darfur",
      parent_id: "SDN5857",
      x: 278.2,
      y: 693.1
    },
    "4": {
      name: "Western Darfur",
      parent_id: "SDN5858",
      x: 94,
      y: 477.8
    },
    "5": {
      name: "Central Darfur",
      parent_id: "SDN5859",
      x: 91.5,
      y: 613.3
    },
    "6": {
      name: "Khartoum",
      parent_id: "SDN874",
      x: 644.9,
      y: 407.8
    },
    "7": {
      name: "Gezira",
      parent_id: "SDN875",
      x: 689.3,
      y: 472.4
    },
    "8": {
      name: "Gedarif",
      parent_id: "SDN876",
      x: 810.4,
      y: 531.7
    },
    "9": {
      name: "River Nile",
      parent_id: "SDN877",
      x: 708.6,
      y: 313
    },
    "10": {
      name: "Northern",
      parent_id: "SDN878",
      x: 479.5,
      y: 159.4
    },
    "11": {
      name: "White Nile",
      parent_id: "SDN879",
      x: 626.2,
      y: 596.3
    },
    "12": {
      name: "Sennar",
      parent_id: "SDN880",
      x: 707.4,
      y: 563.4
    },
    "13": {
      name: "North Darfur",
      parent_id: "SDN881",
      x: 234.2,
      y: 265.5
    },
    "14": {
      name: "South Kordufan",
      parent_id: "SDN882",
      x: 409.6,
      y: 712.7
    },
    "15": {
      name: "North Kordufan",
      parent_id: "SDN883",
      x: 452.8,
      y: 475.6
    },
    "16": {
      name: "Kassala",
      parent_id: "SDN884",
      x: 828.5,
      y: 412.8
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};