if( isset( $_POST['type'] ) &&  $_POST['type'] == 'searchStock' && isset( $_POST['searchValue'] ) ){
    global $wpdb;
    $searchValue =trim( $_POST['searchValue'] );
    $start = (intval($_POST['page'])-1) * 10;
    $end = intval($_POST['page']) * 10;
    $like = '%' . $wpdb->esc_like( $_POST['searchValue'] ) . '%';
    $sql = $wpdb->prepare( "SELECT code,name,date,round(open,2) as open,high,low,close,round(price_change,2) as price_change,
    round(p_change,2) as p_change FROM stocks_last
    WHERE concat(date,code) IN (SELECT concat(max(date),code) as key_value
    FROM stocks_last GROUP BY code,date) and (code LIKE %s OR name LIKE %s)
    ORDER BY code LIMIT %d,%d", $like, $like, $start, $end);
    $result = $wpdb->get_results($sql);  
    echo json_encode($result);
}


if( isset( $_POST['type'] ) &&  $_POST['type'] == 'serarchNews' && isset( $_POST['searchValue'] ) ){
    $news = array();
    $start = (intval($_POST['page'])-1) * 5;
    $end = intval($_POST['page']) * 5;
    $like = '%' . $wpdb->esc_like( $_POST['searchValue'] ) . '%';
    $sql = $wpdb->prepare( "SELECT * FROM $wpdb->posts WHERE (post_title LIKE %s OR post_content LIKE %s)
     limit %d,%d", $like, $like, $start, $end );
    
    $latest_news = $wpdb->get_results($sql);
        foreach ( $latest_news as $post ) {
            $item = array(
                'id'=> $post->ID,
                'name'=>$post->post_title,
                'content'=>wp_trim_words(get_the_excerpt(), 200, '... read more...'),
                'date'=>$post->post_date,
                'author'=>'wordpress',
            );
            array_push($news,$item);
        }
    echo json_encode($news);   
}