var NAVTREE =
[
  [ "CGAL 5.4 - 2D Arrangements", "index.html", [
    [ "User Manual", "index.html", [
      [ "Introduction", "index.html#aos_sec-intro", [
        [ "Separation of Topology and Geometry", "index.html#aos_ssec-intro-sep", null ],
        [ "Well-Behaved Curves", "index.html#aos_ssec-intro-well_behaved", null ],
        [ "Outline", "index.html#aos_ssec-intro-outline", null ]
      ] ],
      [ "Basic Arrangements", "index.html#aos_sec-basic", [
        [ "Representation of Arrangements: The Dcel", "index.html#aos_ssec-basic-dcel", null ],
        [ "The Arrangement Class Template", "index.html#aos_ssec-basic-arr_class", null ],
        [ "Traversing the Arrangement", "index.html#arr_ssectraverse", [
          [ "Traversal Methods for an Arrangement Vertex", "index.html#arr_sssectr_vertex", null ],
          [ "Traversal Methods for an Arrangement Halfedge", "index.html#arr_sssectr_halfedge", null ],
          [ "Traversal Methods for an Arrangement Face", "index.html#arr_sssectr_face", null ]
        ] ],
        [ "Modifying the Arrangement", "index.html#arr_ssecmodify", null ],
        [ "Inserting Pairwise Disjoint x-Monotone Curves", "index.html#arr_sssecmf_insert_cv", null ],
        [ "Manipulating Isolated Vertices", "index.html#arr_sssecmf_iso_verts", null ],
        [ "Manipulating Halfedges", "index.html#arr_sssecmf_halfedges", null ],
        [ "Advanced Insertion Functions", "index.html#arr_sssecadv_insert", null ]
      ] ],
      [ "Issuing Queries on an Arrangement", "index.html#arr_secqueries", [
        [ "Point-Location Queries", "index.html#arr_ssecpl", null ],
        [ "Choosing a Point-Location Strategy", "index.html#aos_sssec-pl_strategy", null ],
        [ "Vertical Ray Shooting", "index.html#arr_ssecray_shoot", null ],
        [ "Batched Point-Location", "index.html#arr_ssecbatched_pl", null ]
      ] ],
      [ "Free Functions", "index.html#arr_secgl_funcs", [
        [ "The Zone Construction Algorithm", "index.html#arr_ssec_zone", [
          [ "Inserting Pairwise Disjoint Curves", "index.html#arr_sssecinsert_non_x", null ],
          [ "Inserting X-monotone Curves", "index.html#arr_sssecinsert_x_mon", null ],
          [ "Inserting General Curves", "index.html#aos_ssec-insert_gen", null ],
          [ "Inserting Points", "index.html#arr_sssecinsert_point", null ],
          [ "Inserting Intersecting Line Segments (code example)", "index.html#arr_sssecinsert_ex", null ]
        ] ],
        [ "Other Zone Related Functions", "index.html#arr_ssseczone", null ],
        [ "The Surface-Sweep Algorithm", "index.html#arr_ssec_sweep", null ],
        [ "Removing Vertices and Edges", "index.html#arr_ssecgl_remove", null ],
        [ "Vertical Decomposition", "index.html#arr_ssec_decompose", null ]
      ] ],
      [ "Arrangements of Unbounded Curves", "index.html#aos_sec-unbounded", [
        [ "Representing Arrangements of Unbounded Curves", "index.html#aos_ssec-unbounded-rep", [
          [ "Basic Manipulation and Traversal Methods", "index.html#arr_sssecunb_basic", null ],
          [ "Free Functions", "index.html#arr_sssec-unb_global", null ]
        ] ],
        [ "Point-Line Duality", "index.html#arr_ssec-unb_duality", null ]
      ] ],
      [ "Arrangements on Curved Surfaces", "index.html#aos_sec-curved_surfaces", [
        [ "Parametric Surfaces", "index.html#aos_ssec-curved_surfaces-parameteric", null ],
        [ "The Arrangement on Surface Class Template", "index.html#aos_ssec-curved_surfaces-aos_class", null ],
        [ "Basic Manipulation and Traversal Methods", "index.html#aos_ssec-curved_surfaces-basic", null ]
      ] ],
      [ "The Geometry Traits", "index.html#aos_sec-geom_traits", [
        [ "The Hierarchy of the Geometry Traits Concepts", "index.html#aos_ssec-geom_traits-concepts", [
          [ "The Basic Concept", "index.html#aos_sssec-geom_traits-concepts_basic", null ],
          [ "Intersections", "index.html#aos_sssec-geom_traits-concepts_intersecting", null ],
          [ "Supporting Arbitrary Curves", "index.html#aos_sssec-geom_traits-concepts_arbitrary", null ],
          [ "The Landmark Concept", "index.html#aos_sssec-tr_landmarks_concept", null ],
          [ "Supporting Unbounded Curves or Curved Surfaces", "index.html#aos_ssec-traits-curved", null ]
        ] ],
        [ "Models of the Geometry Traits Concepts", "index.html#aos_ssec-geom_traits-models", [
          [ "Traits Classes for Line Segments and Linear Objects", "index.html#arr_ssectr_segs", [
            [ "The Caching Segment-Traits Class", "index.html#arr_sssectr_caching_segs", null ],
            [ "The Non-Caching Segment-Traits Class", "index.html#arr_sssectr_non_caching_segs", null ],
            [ "The Linear-Traits Class", "index.html#arr_sssectr_linear", null ]
          ] ],
          [ "The Polyline and Polycurve Traits Classes", "index.html#arr_ssectr_polylines", [
            [ "The Polyline Traits Class", "index.html#arr_sssectr_polylines", null ],
            [ "The Polycurve Traits Class", "index.html#arr_sssectr_polycurves", null ]
          ] ],
          [ "Traits Classes for Algebraic Curves", "index.html#arr_ssectr_algebraic", [
            [ "Circular Arcs and Line Segments", "index.html#arr_sssectr_circ_seg", null ],
            [ "A Traits Class for Conic Arcs", "index.html#arr_sssectr_conic", null ],
            [ "A Traits Class for Arcs of Rational Functions", "index.html#arr_sssectr_ratfunc", null ],
            [ "A Traits Class for Planar Bézier Curves", "index.html#arr_sssectr_bez", null ],
            [ "A Traits Class for Planar Algebraic Curves of Arbitrary Degree", "index.html#arr_sssectr_alg", null ]
          ] ],
          [ "Arcs of Great Circles Embedded in the Sphere", "index.html#arr_ssectr_spherical", null ]
        ] ],
        [ "Traits-Class Decorators", "index.html#arr_ssecmeta_tr", null ]
      ] ],
      [ "The Topology Traits", "index.html#aos_sec-topol_traits", null ],
      [ "Extending the Arrangement", "index.html#arr_sec_extending", [
        [ "The Notification Mechanism", "index.html#arr_ssecnotif", null ],
        [ "Extending the DCEL", "index.html#arr_ssecex_dcel", [
          [ "Extending the DCEL Faces", "index.html#arr_sssecex_dcel_face", null ],
          [ "Extending All DCEL Records", "index.html#arr_sssecex_dcel_all", null ]
        ] ],
        [ "Overlaying Arrangements", "index.html#arr_ssecoverlay", null ],
        [ "Storing the Curve History", "index.html#arr_ssecarr_with_hist", [
          [ "Traversing an Arrangement with History", "index.html#arr_sssecarrwh_traverse", null ],
          [ "Modifying an Arrangement with History", "index.html#arr_sssecmodif_traverse", null ]
        ] ]
      ] ],
      [ "Input/Output Streams", "index.html#aos_sec-io", [
        [ "Input/Output Stream", "index.html#aos_ssec-io-stream", null ],
        [ "Arrangements with Auxiliary Data", "index.html#arr_ssecarr_io_aux_data", null ],
        [ "Arrangements with Curve History", "index.html#arr_ssecarr_io_hist", null ]
      ] ],
      [ "Adapting to Boost Graphs", "index.html#aos_sec-bgl", [
        [ "The Primal Arrangement Representation", "index.html#arr_ssecbgl_primal", null ],
        [ "The Dual Arrangement Representation", "index.html#arr_ssecbgl_dual", null ]
      ] ],
      [ "How To Speed Up Your Computation", "index.html#aos_sec-tips", null ],
      [ "Design and Implementation History", "index.html#aos_sec-design", null ]
    ] ],
    [ "Reference Manual", "modules.html", "modules" ],
    [ "Todo List", "todo.html", null ],
    [ "Refinement Relationships", "refines.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Is Model Relationships", "models.html", null ],
    [ "Has Model Relationships", "hasModels.html", null ],
    [ "Bibliography", "citelist.html", null ],
    [ "Class and Concept List", "annotated.html", "annotated" ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"Arrangement_on_surface_2_2Bezier_curves_8cpp-example.html",
"classArrangementDcelHalfedge.html#a0f512db6d280ab6e9a958dc9e5459790",
"classArrangementVerticalSideTraits__2.html#a5cb419bcfb3a09a574a6949a9fdf1011",
"classCGAL_1_1Arr__consolidated__curve__data__traits__2_1_1Data__container.html#aaed36144a10897a058185f530a16d57b",
"classCGAL_1_1Arr__polycurve__traits__2_1_1Curve__2.html#a6b3b2fc4afc2a271ac628c4a319bc64e",
"classCGAL_1_1Arrangement__2.html#a489da060affd74755c8c5acdc3f691f1",
"group__PkgArrangementOnSurface2Enums.html#gga92ec015604dd1aab753c009565fd28d0acd7482855e300ef8d05409913808b64d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';