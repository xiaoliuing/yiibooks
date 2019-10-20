<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

?>

<div class="ybooks-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'b_name')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'b_autor')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'b_price')->textInput() ?>

    <?= $form->field($model, 'b_add_time')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('保存', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
