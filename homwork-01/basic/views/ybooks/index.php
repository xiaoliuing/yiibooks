<?php

use yii\helpers\Html;
use yii\grid\GridView;

$this->title = '图书管理系统';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ybooks-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('添加 Book', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'b_name',
            'b_autor',
            'b_price',
            'b_add_time',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
