<?php

use yii\helpers\Html;

$this->title = '添加书籍';
$this->params['breadcrumbs'][] = ['label' => 'Ybooks', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ybooks-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
