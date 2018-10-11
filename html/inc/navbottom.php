
<div id="navBottom" class="container-fluid">
    <div class="form-row align-items-center w-80">
        <label class="sr-only" for="inlineFormInputGroup">hashtag</label>
        <div class="input-group mb-2">
            <div class="input-group-prepend heightHashtag">
                <div class="input-group-text borderRoundL p-1">#</div>
            </div>
            <input type="text" class="form-control" id="inputHashtag" placeholder="hashtag">
            <div class="input-group-prepend">
                <div class="input-group-text borderRoundR heightHashtag">
                    <img id="hashtag" src="media/icons/add.png" class="iconHashtag" alt="icone" style="position:relative; z-index:20; margin:0px;" />
                    <img id="hashtagReset" src="media/icons/refresh.png" class="iconHashtag" alt="icone" style="position:relative; z-index:20; margin:0px;" />
                </div>

            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
    jQuery(document).ready(function () {


        //alert('ok');

        $('.question').on('mouseover', () => {
            $('.question').popover({
                container: 'body',
                content: "Un doute ? Besoin d'info supplementaire ? Demandez à la comunuté !"
            });
            $('.question').popover('show');
            //alert('ok');
        })
        $('.question').on('mouseleave', () => {

            $('.question').popover('hide');
            //alert('ok');
        })

    });
</script>
