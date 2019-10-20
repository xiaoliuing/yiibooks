<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

?>

<div class="ybooks-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'b_name') ?>

    <?= $form->field($model, 'b_autor') ?>

    <?= $form->field($model, 'b_price') ?>

    <?= $form->field($model, 'b_add_time') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
